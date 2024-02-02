import { Footer } from '@/components/footer'
import { Icon360 } from '@tabler/icons-react'

function ChangeLogItem() {
  return (
    <li className='relative flex flex-col md:flex-row'>
      <div className='w-full md:w-2/5'>
        <span className='md:sticky top-0 py-4'>March 2, 2024</span>
      </div>
      <div className='w-full md:w-3/5'>
        <h3 className='flex text-2xl font-semibold'>
          <Icon360 className='mt-1 mr-2' />
          Title of Update
        </h3>

        <p>Content goes here</p>

        <p>
          Esse quis sint eiusmod est deserunt. Consequat duis aliqua consectetur
          in deserunt est incididunt consequat est consequat. Deserunt sint
          eiusmod enim et cupidatat tempor consequat ad consequat et dolore
          consequat. Ad esse enim cillum incididunt labore laboris. Non
          consequat ad fugiat proident. Minim laborum dolor cupidatat deserunt
          anim est consectetur nulla ad excepteur aute.
        </p>

        <p>
          Esse ex culpa laboris duis adipisicing excepteur incididunt dolor
          ipsum dolor tempor enim. Eiusmod non commodo laborum laborum irure.
          Adipisicing qui reprehenderit commodo labore nisi. Reprehenderit
          exercitation ullamco ullamco deserunt labore enim et proident amet
          sint consequat minim dolor.
        </p>
        <p>
          Tempor cupidatat laborum ad incididunt cillum ex. Non aute deserunt
          enim pariatur consequat ipsum minim et qui tempor fugiat amet
          excepteur. Culpa cillum consectetur dolor dolore sint exercitation
          eiusmod est fugiat qui. Ea qui id et minim do aliquip velit veniam
          eiusmod aliqua voluptate ut cillum ipsum.
        </p>
      </div>
    </li>
  )
}

export default function ChangeLogPage() {
  return (
    <>
      <section>
        <ol className='flex flex-col gap-8 py-2 px-2 border-r h-full'>
          <ChangeLogItem />
          <ChangeLogItem />
          <ChangeLogItem />
          <ChangeLogItem />
          <ChangeLogItem />
          <ChangeLogItem />
        </ol>
      </section>
      <Footer/>
    </>
  )
}
