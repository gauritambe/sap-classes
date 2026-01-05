import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const UserManagementPanel = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const filteredUsers = users?.filter(user => {
    const matchesSearch = user?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         user?.email?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    const matchesRole = filterRole === 'all' || user?.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'Admin': return 'bg-purple-500 text-white';
      case 'Instructor': return 'bg-blue-500 text-white';
      case 'Student': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (status) => {
    return status === 'Active' ?'text-[var(--color-success)]' :'text-[var(--color-text-secondary)]';
  };

  return (
    <div className="bg-[var(--color-card)] rounded-lg shadow-sm border border-[var(--color-border)]">
      <div className="p-4 md:p-6 border-b border-[var(--color-border)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)]">User Management</h2>
          <Button variant="default" size="sm" iconName="UserPlus" iconPosition="left">
            Add User
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <div className="flex-1">
            <Input
              type="search"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="w-full"
            />
          </div>
          
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e?.target?.value)}
            className="px-3 md:px-4 py-2 text-sm md:text-base border border-[var(--color-border)] rounded-lg bg-[var(--color-card)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          >
            <option value="all">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Instructor">Instructor</option>
            <option value="Student">Student</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[var(--color-muted)]">
            <tr>
              <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-[var(--color-text-primary)]">
                User
              </th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-[var(--color-text-primary)]">
                Role
              </th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-[var(--color-text-primary)]">
                Status
              </th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-[var(--color-text-primary)]">
                Last Active
              </th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-[var(--color-text-primary)]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border)]">
            {filteredUsers?.map((user) => (
              <tr key={user?.id} className="hover:bg-[var(--color-muted)] transition-colors">
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center flex-shrink-0">
                      <span className="text-xs md:text-sm font-semibold text-white">
                        {user?.name?.split(' ')?.map(n => n?.[0])?.join('')}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm md:text-base font-medium text-[var(--color-text-primary)] truncate">{user?.name}</p>
                      <p className="text-xs md:text-sm text-[var(--color-text-secondary)] truncate">{user?.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <span className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${getRoleBadgeColor(user?.role)}`}>
                    {user?.role}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className={`w-2 h-2 rounded-full ${user?.status === 'Active' ? 'bg-[var(--color-success)]' : 'bg-[var(--color-muted)]'}`} />
                    <span className={`text-xs md:text-sm font-medium ${getStatusColor(user?.status)}`}>
                      {user?.status}
                    </span>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <span className="text-xs md:text-sm text-[var(--color-text-secondary)]">{user?.lastActive}</span>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <div className="flex items-center gap-1 md:gap-2">
                    <button className="p-1 md:p-2 hover:bg-[var(--color-muted)] rounded-md transition-colors" aria-label="Edit user">
                      <Icon name="Edit" size={16} className="text-[var(--color-text-secondary)]" />
                    </button>
                    <button className="p-1 md:p-2 hover:bg-[var(--color-muted)] rounded-md transition-colors" aria-label="Delete user">
                      <Icon name="Trash2" size={16} className="text-[var(--color-error)]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredUsers?.length === 0 && (
        <div className="p-8 md:p-12 text-center">
          <Icon name="Users" size={48} className="mx-auto mb-3 md:mb-4 text-[var(--color-text-secondary)]" />
          <p className="text-sm md:text-base text-[var(--color-text-secondary)]">No users found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default UserManagementPanel;