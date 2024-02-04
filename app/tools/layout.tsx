import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='w-full flex flex-0 relative'>
      <aside className='hidden md:flex md:w-[320px] sticky top-0 max-h-dvh overflow-auto flex-col border-r'>
        <a
          href='#tool'
          className={cn(
            buttonVariants(),
            'absolute top-2 left-2 opacity-0 pointer-events-none focus-visible:pointer-events-auto focus-visible:opacity-100'
          )}
        >
          Skip to tool
        </a>
        <Sidebar />
      </aside>
      <div id='tool' className='w-full flex flex-col'>
        <span className='flex-1'>{children}</span>
        <Footer />
      </div>
    </main>
  )
}
