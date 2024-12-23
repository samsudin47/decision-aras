import {
  Database,
  CalculatorIcon,
  Home,
  PrinterIcon,
  User2Icon,
  LogOutIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Data Kriteria",
    url: "#",
    icon: Database,
  },
  {
    title: "Data Sub Kriteria",
    url: "#",
    icon: Database,
  },
  {
    title: "Data Alternatif",
    url: "#",
    icon: Database,
  },
  {
    title: "Data Penilaian",
    url: "#",
    icon: CalculatorIcon,
  },
  {
    title: "Data Perhitungan",
    url: "#",
    icon: CalculatorIcon,
  },
  {
    title: "Data Hasil Akhir",
    url: "#",
    icon: PrinterIcon,
  },
  {
    title: "Data User",
    url: "#",
    icon: User2Icon,
  },
  {
    title: "Logout",
    url: "#",
    icon: LogOutIcon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar style={{ backgroundColor: "#DEB887" }}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mt-5">
            <span className="text-lg text-black ">SPK ARAS</span>
          </SidebarGroupLabel>
          <SidebarGroupContent className="ml-2">
            <SidebarMenu className="mt-5">
              {items.map((item) => (
                <SidebarMenuItem className="my-2  font-sans" key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
