import { Member, NewMember } from './types';

export function generateMemberId(members: Member[]): number {
  return Math.max(...members.map(m => m.id), 0) + 1;
}

export function formatNewMember(data: NewMember): Member {
  return {
    id: 0, // Will be set by context
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    phone: data.phone,
    status: data.status as 'active' | 'inactive' | 'pending',
    role: data.role,
    joinDate: new Date().toISOString().split('T')[0],
  };
}

export function filterMembers(
  members: Member[],
  searchQuery: string,
  statusFilter: string,
  roleFilter: string
): Member[] {
  return members.filter((member) => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.phone.includes(searchQuery);

    const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
    const matchesRole = roleFilter === 'all' || member.role.toLowerCase() === roleFilter.toLowerCase();

    return matchesSearch && matchesStatus && matchesRole;
  });
}