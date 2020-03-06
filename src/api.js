const usersAPI = {
    columns: [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Last Name',
          field: 'position',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Email',
          field: 'office',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Age',
          field: 'age',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Start date',
          field: 'date',
          sort: 'asc',
          width: 150
        },
       
      ],
      rows: [
        {
          name: 'PERRIN CULERO perrin Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
        
        
        },
       
      
      ],
    all: function() {
        return this.users;
    },
    get: function(id) {
        return this.users.find(u => u.id === id);
    }
  };

  export default usersAPI;