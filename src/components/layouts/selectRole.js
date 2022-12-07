import React from 'react'
import SelectRoleBuyer from './SelectRoleBuyer';
import SelectRoleSeller from './SelectRoleSeller';

export default function selectRole() {
  return (
    <div className='flex-box select-role-container border'>
        <SelectRoleBuyer/>
        <SelectRoleSeller/>
      </div>
  )
}
