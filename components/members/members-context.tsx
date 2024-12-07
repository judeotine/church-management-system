'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { members as initialMembers } from '@/lib/members/data';
import { MembersContextType, MembersState, NewMember, Member } from '@/lib/members/types';
import { generateMemberId, formatNewMember, filterMembers } from '@/lib/members/actions';

const MembersContext = createContext<MembersContextType | undefined>(undefined);

export function MembersProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<MembersState>({
    members: initialMembers,
    filteredMembers: initialMembers,
    searchQuery: '',
    statusFilter: 'all',
    roleFilter: 'all',
  });

  useEffect(() => {
    const filtered = filterMembers(
      state.members,
      state.searchQuery,
      state.statusFilter,
      state.roleFilter
    );
    setState(prev => ({ ...prev, filteredMembers: filtered }));
  }, [state.members, state.searchQuery, state.statusFilter, state.roleFilter]);

  const setSearchQuery = (query: string) => {
    setState(prev => ({ ...prev, searchQuery: query }));
  };

  const setStatusFilter = (status: string) => {
    setState(prev => ({ ...prev, statusFilter: status }));
  };

  const setRoleFilter = (role: string) => {
    setState(prev => ({ ...prev, roleFilter: role }));
  };

  const addMember = (newMemberData: NewMember) => {
    const newMember = formatNewMember(newMemberData);
    newMember.id = generateMemberId(state.members);

    setState(prev => ({
      ...prev,
      members: [...prev.members, newMember],
    }));
  };

  const deleteMember = (id: number) => {
    setState(prev => ({
      ...prev,
      members: prev.members.filter(member => member.id !== id),
    }));
  };

  const updateMember = (id: number, data: Partial<Member>) => {
    setState(prev => ({
      ...prev,
      members: prev.members.map(member =>
        member.id === id ? { ...member, ...data } : member
      ),
    }));
  };

  return (
    <MembersContext.Provider value={{
      ...state,
      setSearchQuery,
      setStatusFilter,
      setRoleFilter,
      addMember,
      deleteMember,
      updateMember,
    }}>
      {children}
    </MembersContext.Provider>
  );
}

export function useMembers() {
  const context = useContext(MembersContext);
  if (context === undefined) {
    throw new Error('useMembers must be used within a MembersProvider');
  }
  return context;
}