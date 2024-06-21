import { createColumnHelper } from "@tanstack/react-table"

const columnHelper = createColumnHelper();

const columnDef = [
    {
        accessorKey: 'event_id',
        header: 'Event ID'
    },
    {
        accessorKey: 'event_date',
        header: 'Date'
    },
    {
        accessorKey: 'event_address',
        header: 'Event Address'
    },
    {
        accessorKey: 'createdAt',
        header: 'Date Created'
    },
    {
        accessorKey: 'ClientClientId',
        header: 'Client ID'
    },
    {
        accessorKey: 'client_name',
        header: 'Client Name'
    },

]

export default columnDef