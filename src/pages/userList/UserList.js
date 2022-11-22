import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import ChangeRole from "../../components/changeRole/ChangeRole";
import PageMenu from "../../components/pageMenu/PageMenu";
import Search from "../../components/search/Search";
import UserStats from "../../components/userStats/UserStats";
import "./UserList.scss";

const UserList = () => {
  return (
    <section>
      <div className="container">
        <PageMenu />
        <UserStats />

        <div className="user-list">
          <div className="table">
            <div className="--flex-between">
              <span>
                <h3>All Users</h3>
              </span>
              <span>
                <Search />
              </span>
            </div>
            {/* Table */}
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Change Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Zino</td>
                  <td>Zino@gmail.com</td>
                  <td>Admin</td>
                  <td>
                    <ChangeRole />
                  </td>
                  <td>
                    <span>
                      <FaTrashAlt size={20} color="red" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserList;
