
const columnDef = [
    {
        id: 'select-col',
        header: " SELECT ",
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      },
    {
        accessorKey: 'app_id',
        header: 'Event ID'
    },
    {
        accessorKey: 'app_date',
        header: 'Date'
    },
    {
        accessorKey: 'app_address',
        header: 'Address'
    },
    {
        accessorKey: 'client_name',
        header: 'Client Name'
    }
]

export default columnDef