import React from 'react'
import {List, Datagrid,TextField, EditButton, DeleteButton, EmailField} from 'react-admin'

const UserList= (props)=>{
    return(
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source='id'/>
                <TextField source='name'/>
                <EmailField source='email'/>
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
}

export default UserList;