/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Form, Input, Modal, Table, Button } from "antd";
import { ColumnsType } from "antd/es/table";
import form from "antd/es/form";

interface ICrud {
  id: number;
  fname: string;
  lname: string;
  username: string;
  avatar: string;
  email?: string;
}

const basiccrud = () => {
  const getapi = "https://www.melivecode.com/api/users";
  const postapi = "https://www.melivecode.com/api/users/create";
  const putapi = "https://www.melivecode.com/api/users/update";
  const deleteapi = "https://www.melivecode.com/api/users/delete";

  const [dataPerson, setDataPerson] = useState<ICrud[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [getlname, setlName] = useState<string>();
  const [getfname, setfName] = useState<string>();
  const [getemail, setEmail] = useState<string>();
  const [getavatar, setAvatar] = useState<string>();

  const [getID, setID] = useState<number>();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModalEdit = () => {
    setIsModalEdit(true);
  };

  const handleCancelEdit = () => {
    setIsModalEdit(false);
  };

  const fetchData = async () => {
    try {
      const response: AxiosResponse = await axios.get(getapi);
      setDataPerson(response.data);
    } catch (err) {
      console.log("err =>", err);
    }
  };
  console.log("data =>", dataPerson);

  const createData = async (value: {
    fname: string;
    lname: string;
    username: string;
    avatar: string;
    email?: string;
  }) => {
    try {
      const posedata: AxiosResponse = await axios.post(postapi, value);
      setDataPerson([...dataPerson, posedata.data]);
      setIsModalOpen(false);
    } catch (err) {
      console.log("err =>", err);
    } finally {
      fetchData();
    }
  };

  const handleUpdate = (values: ICrud) => {
    console.log("values => ", values);
    axios({
      method: "put",
      url: putapi,
      data: {
        id: getID,
        lname: getlname,
        fname: getfname,
        username: getemail,
        avatar: getavatar,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsModalEdit(false);
        fetchData();
      });
  };

  const handleDelete = (value: number) => {
    axios({
      method: "delete",
      url: deleteapi,
      data: {
        id: value,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        fetchData();
      });
  };

  const handleInputLname = (e: any) => {
    setlName(e.target.value);
  };

  const handleInputFname = (e: any) => {
    setfName(e.target.value);
  };

  const handleInputEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleInputAvatar = (e: any) => {
    setAvatar(e.target.value);
  };

  // const handleDelete = () => {
  //   const payload = {id: selectedItem}
  //   axios.delete(${deleteapi}, ${payload})
  // }

  // const handleDelete = async (value: { id: number }) => {
  //   console.log()
  //     try {
  //       const param = value;
  //       const deletedata: AxiosResponse = await axios.delete(deleteapi, value);
  //     } catch (error) {
  //       console.error("Error deleting item:", error);
  //     }
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const columns: ColumnsType<ICrud> = [
    {
      title: "ID",
      dataIndex: "id",
      render: (_, record) => <div>{record.id}</div>,
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (_, record) => (
        <img src={record.avatar} alt="" className="w-10" />
      ),
    },
    {
      title: "Full Name",
      dataIndex: "fname",
      render: (_, record) => <div>{record.fname}</div>,
    },
    {
      title: "Last Name",
      dataIndex: "lname",
      render: (_, record) => <div>{record.lname}</div>,
    },
    {
      title: "Username",
      dataIndex: "username",
      render: (_, record) => <div>{record.username}</div>,
    },
    {
      title: "แก้ไข",
      dataIndex: "edit",
      render: (_, record) => (
        <div className="flex gap-4">
          <div>
            <button
              onClick={() => {
                showModalEdit(), setID(record.id);
                setlName(record.fname);
              }}
              className="btn btn-accent"
            >
              Edit
            </button>
          </div>
          <div>
            <button
              className="btn btn-accent"
              onClick={() => handleDelete(record.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto py-[100px]">
      <h1 className="text-[60px] font-bold text-center dark:text-white text-gray-800">
        Basic CRUD
      </h1>
      <p className="font-bold dark:text-white text-gray-800 text-center pb-[20px]">
        (Data 1 - 12 can't delete)
      </p>
      <div className="flex justify-start py-4">
        <button className="btn btn-accent" onClick={showModal}>
          Create User
        </button>
      </div>
      <Table onChange={fetchData} columns={columns} dataSource={dataPerson} />
      <Modal
        title="Create"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            form="formcreate"
            key="submit"
            htmlType="submit"
            onClick={fetchData}
          >
            Create
          </Button>,
        ]}
      >
        <Form id="formcreate" onFinish={createData}>
          <Form.Item
            name="fname"
            label="Fullname"
            rules={[{ required: true, message: "Please enter the fullname" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lname"
            label="Lastname"
            rules={[{ required: true, message: "Please enter the lastname" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="username"
            label="Email"
            rules={[{ required: true, message: "Please enter the username" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="avatar"
            label="Avatar"
            rules={[
              { required: true, message: "Please enter the avatar(image URL)" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Username"
            rules={[{ required: true, message: "Please enter the email" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Edit"
        open={isModalEdit}
        onCancel={handleCancelEdit}
        footer={[
          <Button key="cancel" onClick={handleCancelEdit}>
            Cancel
          </Button>,
          <Button form="formEdit" key="submit" htmlType="submit">
            Edit
          </Button>,
        ]}
      >
        <Form id="formEdit" onFinish={handleUpdate}>
          <Form.Item
            name="fname"
            label="Fullname"
            rules={[{ required: true, message: "Please enter the fullname" }]}
          >
            <Input onChange={handleInputFname} />
          </Form.Item>
          <Form.Item
            name="lname"
            label="Lastname"
            rules={[{ required: true, message: "Please enter the lastname" }]}
          >
            <Input onChange={handleInputLname} />
          </Form.Item>
          <Form.Item
            name="username"
            label="Email"
            rules={[{ required: true, message: "Please enter the Email" }]}
          >
            <Input onChange={handleInputEmail} />
          </Form.Item>
          <Form.Item
            name="avatar"
            label="Avatar"
            rules={[
              { required: true, message: "Please enter the avatar(image URL)" },
            ]}
          >
            <Input onChange={handleInputAvatar} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default basiccrud;
