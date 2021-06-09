import React , { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CommentForm=(props)=>{

    const [isModalOpen , setisModalOpen]= useState(false);
    
    const toggleModal=()=>{
        setisModalOpen(!isModalOpen);
    }

   return (
    <div className="mt-3 ">
        <button className="btn btn-primary" onClick={toggleModal} ><i class="fa fa-pencil" aria-hidden="true"></i> Sumbit Comment</button> 
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
);

}



export default CommentForm;