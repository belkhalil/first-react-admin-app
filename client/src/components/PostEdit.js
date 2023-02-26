import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";

const PostEdit=()=>{
return(
    <Edit>
         <SimpleForm>
            <TextInput disabled source="id"/>
        <TextInput source="title"/>
        <TextInput multiline source="body"/>
        <DateInput label='Published' source="publishedAt"/>
    </SimpleForm>
    </Edit>
)
}
export default PostEdit;