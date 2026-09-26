import { createFileRoute, Link, Outlet, redirect, useRouter } from "@tanstack/react-router";
import { CalendarDays, HeartHandshake, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({ to: "/auth" });
    return { user: data.user };
  },
  component: StaffLayout,
});

function StaffLayout() {
  const router = useRouter();

  const signOut = async () => {
    await supabase.auth.signOut();
    await router.navigate({ to: "/auth" });
  };

  return (
    <>
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-2.5 sm:px-6 lg:px-8">
          <span className="eyebrow mr-2 hidden sm:inline">Staff workspace</span>
          <Link
            to="/pastoral-care"
            className="focus-ring inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
          >
            <HeartHandshake className="size-4" /> Pastoral Care
          </Link>
          <Link
            to="/content"
            className="focus-ring inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
          >
            <CalendarDays className="size-4" /> Events & Gallery
          </Link>
          <button
            onClick={() => void signOut()}
            className="focus-ring ml-auto inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <LogOut className="size-4" /> Sign out
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}
