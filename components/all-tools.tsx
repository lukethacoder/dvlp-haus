import { CATEGORIES, getToolsByCategory } from '@/lib/tools'
import { getEntries } from '@/lib/ts'
import TOOLS from '@/tools'
import Link from 'next/link'

export function AllTools() {
  return (
    <ul className='flex flex-col gap-8'>
      {getEntries(getToolsByCategory(TOOLS))
        // hide categories that have no tools
        .filter(([_, category]) => category.length > 0)
        .map(([key, category]) => {
          const CategoryIcon = CATEGORIES[key].icon

          return (
            <li key={key}>
              <h3 className='flex items-center text-sm md:text-md font-medium mb-2'>
                <CategoryIcon size={20} />
                <span className='ml-2'>{CATEGORIES[key].name}</span>
              </h3>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {category.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/tools/${item.slug}`}
                    className='hover-card w-full h-full rounded flex flex-col ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0'
                  >
                    <span className='font-medium text-md md:text-lg'>
                      {item.name}
                    </span>
                    <span className='text-muted-foreground text-sm'>
                      {item.description}
                    </span>
                    <span className='hover-block'></span>
                  </Link>
                ))}
              </ul>
            </li>
          )
        })}
      <li></li>
    </ul>
  )
}
