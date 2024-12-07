'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

export default function SermonsFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search sermons..."
          className="pl-9"
        />
      </div>
      <Select defaultValue="all">
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Series" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Series</SelectItem>
          <SelectItem value="faith">Faith Foundations</SelectItem>
          <SelectItem value="hope">Hope in Action</SelectItem>
          <SelectItem value="love">Love Unlimited</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all">
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Speaker" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Speakers</SelectItem>
          <SelectItem value="pastor-john">Pastor John</SelectItem>
          <SelectItem value="pastor-sarah">Pastor Sarah</SelectItem>
          <SelectItem value="guest">Guest Speakers</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}