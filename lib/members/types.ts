export interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'pending';
  role: string;
  joinDate: string;
}

export interface NewMember {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  status: string;
  notes?: string;
  photo?: File;
}

export interface MembersState {
  members: Member[];
  filteredMembers: Member[];
  searchQuery: string;
  statusFilter: string;
  roleFilter: string;
}

export interface MembersContextType extends MembersState {
  setSearchQuery: (query: string) => void;
  setStatusFilter: (status: string) => void;
  setRoleFilter: (role: string) => void;
  addMember: (member: NewMember) => void;
  deleteMember: (id: number) => void;
  updateMember: (id: number, data: Partial<Member>) => void;
}