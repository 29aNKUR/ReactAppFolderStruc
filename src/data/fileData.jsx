const explorer = {
    name: 'src',
    folderItems: [
        {
            name:'app.js'
        },
        {
            name:'index.js'
        },
        {
            name:'Styles',
            folderItems: [
                {
                    name:'styles.css'
                },
                {
                    name:'index.css'
                },
                {
                    name:'vendor.css',
                    folderItems: [
                        {
                            name:'styles.css'
                        },
                        {
                            name:'index.css'
                        },
                    ]
                }
            ] 
        }

    ]
}

export default explorer;