'use client';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { useMembers } from './members-context';

export default function MembersFilters() {
  const { setSearchQuery, setStatusFilter, setRoleFilter } = useMembers();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search members..."
          className="pl-9"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Select defaultValue="all" onValueChange={setStatusFilter}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Members</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all" onValueChange={setRoleFilter}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Roles</SelectItem>
          <SelectItem value="member">Member</SelectItem>
          <SelectItem value="leader">Leader</SelectItem>
          <SelectItem value="pastor">Pastor</SelectItem>
          <SelectItem value="volunteer">Volunteer</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}