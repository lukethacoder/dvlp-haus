import { notFound } from 'next/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CodeBlock } from '@/components/code-block'

export default async function DevPage() {
  if (process.env.NODE_ENV !== 'development') {
    notFound()
  }

  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-between'>
        <div className='w-full pb-16'>
          <section className='max-w-5xl mx-auto w-full px-4 mt-16'>
            <h2 className='text-2xl mb-4'>CodeBlock</h2>
            <div className='flex flex-wrap gap-4'>
              <CodeBlock code={`const hello = 'world'`} className='w-full' />
            </div>
          </section>

          <section className='max-w-5xl mx-auto w-full px-4 mt-16'>
            <h2 className='text-2xl mb-4'>Colors</h2>
            <div className='flex flex-wrap gap-4'>
              <p className='text-foreground'>text-foreground</p>
              <p className='text-primary'>text-primary</p>
              <p className='text-card'>text-card</p>
              <p className='text-muted'>text-muted</p>
              <p className='text-accent'>text-accent</p>
              <p className='text-popover'>text-popover</p>
              <p className='text-secondary'>text-secondary</p>
              <p className='text-destructive'>text-destructive</p>
            </div>

            <div className='flex flex-wrap gap-4'>
              <p className='bg-background'>text-foreground</p>
              <p className='bg-card'>text-card</p>
              <p className='bg-muted'>text-muted</p>
              <p className='bg-accent'>text-accent</p>
              <p className='bg-primary'>text-primary</p>
              <p className='bg-popover'>text-popover</p>
              <p className='bg-secondary'>text-secondary</p>
              <p className='bg-destructive'>text-destructive</p>
            </div>
          </section>

          <section className='max-w-5xl mx-auto w-full px-4 mt-16'>
            <h2 className='text-2xl mb-4'>Button</h2>
            <div className='flex flex-wrap gap-4'>
              <Button variant='default'>variant=default</Button>
              <Button variant='secondary'>variant=secondary</Button>
              <Button variant='destructive'>variant=destructive</Button>
              <Button variant='ghost'>variant=ghost</Button>
              <Button variant='link'>variant=link</Button>
              <Button variant='outline'>variant=outline</Button>
            </div>
          </section>

          <section className='max-w-5xl mx-auto w-full px-4 mt-16'>
            <h2 className='text-2xl mb-4'>Card</h2>
            <div className='flex flex-wrap gap-4'>
              <Card className='w-[350px]'>
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                    Deploy your new project in one-click.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className='grid w-full items-center gap-4'>
                      <div className='flex flex-col space-y-1.5'>
                        <p>hello world</p>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className='flex justify-between'>
                  <Button variant='outline'>Cancel</Button>
                  <Button>Deploy</Button>
                </CardFooter>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
