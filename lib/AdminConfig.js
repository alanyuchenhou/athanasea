AdminConfig = {
    collections: {
        Spp: {
            tableColumns: [
                {label: 'name', name: 'name'},
                {label: 'description', name: 'description'},
                {label: 'author', name: 'author'},
                {label: 'createdAt', name: 'createdAt'}
            ]
        },
        Animals: {
            tableColumns: [
                {label: 'name', name: 'name'},
                {label: 'spId', name: 'spId'},
                {label: 'subspName', name: 'subspName'},
                {label: 'owner', name: 'owner'},
                {label: 'createdAt', name: 'createdAt'}
            ]
        }
    }
};
