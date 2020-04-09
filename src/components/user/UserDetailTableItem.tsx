import React , { SFC } from "react";

interface UserDetailTableItemProps {
  record?: any;
}

const UserDetailTableItem: SFC <UserDetailTableItemProps> = (props) => {
  console.log('user detaisl', props.record)
  return (
    <p>
      detalhe do usueário: 
    </p>
  )
}

export default UserDetailTableItem