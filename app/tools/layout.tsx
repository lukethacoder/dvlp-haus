import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/sidebar";

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full flex flex-1'>
      <aside className="md:w-[320px] h-full overflow-auto">
        <Sidebar/>
      </aside>
      <div className="w-full flex flex-col">
        <span className="flex-1">
          {children}
        </span>
        <Footer />
      </div>
    </main>
  )
}
