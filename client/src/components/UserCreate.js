import React from "react"
import { Create,SimpleForm, TextInput } from "react-admin"

const UserCreate = ()=>{
    return(
<Create>
    <SimpleForm>
        <TextInput source="name"/>
        <TextInput multiline source="email"/>
    </SimpleForm>
</Create>
    )
}
export default UserCreate