import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const PIXEL_VALUES = [
  { tw: 'text-xs', px: 12 } /* 0.75rem */,
  { tw: 'text-sm', px: 14 } /* 0.875rem */,
  { tw: 'text-base', px: 16 } /* 1rem; */,
  { tw: 'text-lg', px: 18 } /* 1.125rem */,
  { tw: 'text-xl', px: 20 } /* 1.25rem */,
  { tw: 'text-2xl', px: 24 } /* 1.5rem */,
  { tw: 'text-3xl', px: 30 } /* 1.875rem */,
  { tw: 'text-4xl', px: 36 } /* 2.25rem */,
  { tw: 'text-5xl', px: 48 } /* 3rem; */,
  { tw: 'text-6xl', px: 60 } /* 3.75rem */,
  { tw: 'text-7xl', px: 72 } /* 4.5rem */,
  { tw: 'text-8xl', px: 96 } /* 6rem; */,
  { tw: 'text-9xl', px: 128 } /* 8rem; */,
]

export function ConversionTable({
  baseFontSize = 16,
}: {
  baseFontSize: number
}) {
  const tableRows = PIXEL_VALUES.map((item) => ({
    ...item,
    rem: item.px / baseFontSize,
  }))

  return (
    <Table>
      <TableCaption>
        Font conversion table showing the different rem values given standard px
        font sizes as well as default <a href='https://tailwindcss.com/docs/font-size' target='_blank'>TailwindCSS</a> class names.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>px</TableHead>
          <TableHead>em/rem</TableHead>
          <TableHead>TailwindCSS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableRows.map((item) => (
          <TableRow key={`${item.tw}`}>
            <TableCell>{item.px}</TableCell>
            <TableCell>{Math.round(item.rem * 1000) / 1000}</TableCell>
            <TableCell>{item.tw}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
