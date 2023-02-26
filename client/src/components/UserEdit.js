import {  Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit=()=>{
return(
    <Edit>
    <SimpleForm>
        <TextInput disabled source="id"/>
        <TextInput source="name"/>
        <TextInput  source="email"/>
    </SimpleForm>
    </Edit>
)
}
export default UserEdit;