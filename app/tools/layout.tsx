import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='w-full flex flex-0 relative'>
      <aside className='hidden md:flex md:w-[320px] sticky top-0 max-h-dvh overflow-auto flex-col border-r'>
        <Sidebar />
      </aside>
      <div className='w-full flex flex-col'>
        <span className='flex-1'>{children}</span>
        <Footer />
      </div>
    </main>
  )
}
