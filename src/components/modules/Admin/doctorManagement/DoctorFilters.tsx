"use client";
import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import MultiSelectFilter from "@/components/shared/MultiSelectFilter";
import RefreshButton from "@/components/shared/RefressButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDebounce } from "@/hooks/useDebounce";
import { ISpecialty } from "@/types/specialities.interface";
import { Check, ChevronsUpDown, Filter, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

interface DoctorsFilterProps {
  specialties: ISpecialty[];
}

const DoctorFilters = ({ specialties }: DoctorsFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  // ?speciality=Cardiology&speciality=Dermatology
  const [localSpecialties, setLocalSpecialties] = useState<string[]>(() => searchParams.getAll("specialties") || []);
  const [genderInput, setGenderInput] = useState(() => searchParams.get("gender") || "");
  const [emailInput, setEmailInput] = useState(() => searchParams.get("email") || "");
  const [contactNumberInput, setContactNumberInput] = useState(() => searchParams.get("contactNumber") || "");

  const debouncedGender = useDebounce(genderInput, 300);
  const debouncedEmail = useDebounce(emailInput, 500);
  const debouncedContactNumber = useDebounce(contactNumberInput, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    // Update debounced fields
    if (debouncedGender) {
      params.set("gender", debouncedGender);
    } else {
      params.delete("gender");
    }

    if (debouncedEmail) {
      params.set("email", debouncedEmail);
    } else {
      params.delete("email");
    }

    if (debouncedContactNumber) {
      params.set("contactNumber", debouncedContactNumber);
    } else {
      params.delete("contactNumber");
    }

    // Reset to page 1 when filters change
    params.set("page", "1");

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedGender, debouncedEmail, debouncedContactNumber]);

  const toggleSpecialty = (specialtyTitle: string) => {
    const newSelection = localSpecialties.includes(specialtyTitle) ? localSpecialties.filter((id) => id !== specialtyTitle) : [...localSpecialties, specialtyTitle];

    setLocalSpecialties(newSelection);
    return newSelection;
  };

  const applySpecialtyFilter = (selected: string[] = localSpecialties) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("specialties");
    selected.forEach((val) => params.append("specialties", val));

    params.set("page", "1");

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });

    setOpen(false);
  };

  const clearAllFilters = () => {
    setGenderInput("");
    setEmailInput("");
    setContactNumberInput("");
    setLocalSpecialties([]);
    startTransition(() => {
      router.push(window.location.pathname);
    });
  };

  const activeFiltersCount = localSpecialties.length + (genderInput ? 1 : 0) + (emailInput ? 1 : 0) + (contactNumberInput ? 1 : 0);

  return (
    <div className="space-y-3">
      {/* Row 1: Search and Refresh */}
      <div className="flex items-center gap-3">
        <SearchFilter paramName="searchTerm" placeholder="Search doctors..." />
        <RefreshButton />
      </div>

      {/* Row 2: Filter Controls */}
      <div className="flex items-center gap-3">
        {/* Specialties Multi-Select */}
        <MultiSelectFilter
          paramName="specialties"
          options={specialties.map((specialty) => ({
            value: specialty.title,
            label: specialty.title,
          }))}
          placeholder="Select specialties"
          searchPlaceholder="Search specialties..."
          emptyMessage="No specialty found."
          showBadges={false}
        />

        {/* Gender Filter */}
        <SelectFilter
        paramName="gender"
        placeholder="Gender"
        defaultValue="All Genders"
        options={[
          { label: "Male", value: "MALE" },
          { label: "Female", value: "FEMALE" },
        ]}
        />

        {/* Email Filter */}
        <SearchFilter paramName="email" placeholder="Email" />

        {/* Contact Number Filter */}
        <SearchFilter paramName="contactNumber" placeholder="Contact" />

        {/* Clear Filters */}
        <ClearFiltersButton onAfterClear={clearAllFilters} showCount={activeFiltersCount > 0} />
      </div>

      {/* Row 3: Active Specialty Badges - Fixed Height to Prevent Shift */}

      {localSpecialties.length > 0 && (
        <div className="min-h-8 flex items-center">
          <div className="flex flex-wrap gap-2">
            {localSpecialties.map((specialtyTitle) => (
              <Badge key={specialtyTitle} variant="outline" className="px-2.5 py-1 h-7">
                {specialtyTitle}
                <Button
                  variant="ghost"
                  onClick={() => {
                    const updated = toggleSpecialty(specialtyTitle); // returns new list
                    applySpecialtyFilter(updated); // pass new list
                  }}
                  className="ml-1.5 hover:text-destructive transition-colors"
                  aria-label={`Remove ${specialtyTitle}`}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorFilters;
