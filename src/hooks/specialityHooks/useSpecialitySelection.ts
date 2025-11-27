import { IDoctor } from "@/types/doctor.interface";
import { ISpecialty } from "@/types/specialities.interface";
import { useEffect, useState } from "react";

interface UseSpecialtySelectionProps {
  doctor?: IDoctor;
  isEdit: boolean;
  open: boolean;
}

interface UseSpecialtySelectionReturn {
  selectedSpecialtyIds: string[];
  removedSpecialtyIds: string[];
  currentSpecialtyId: string;
  setCurrentSpecialtyId: (id: string) => void;
  handleAddSpecialty: () => void;
  handleRemoveSpecialty: (id: string) => void;
  getNewSpecialties: () => string[];
  getAvailableSpecialties: (allSpecialties: ISpecialty[]) => ISpecialty[];
}

export const useSpecialitySelection = ({ doctor, isEdit, open }: UseSpecialtySelectionProps): UseSpecialtySelectionReturn => {


/**
 * Returns the initial list of selected specialty IDs from the doctor's specialties.
 * If in edit mode and the doctor has specialties, it will return the list of specialty IDs.
 * Otherwise, it will return an empty list.
 * @returns {string[]} The list of selected specialty IDs.
 */
  const getInitialSpecialtyIds = () => {
    if (isEdit && doctor?.doctorSpecialties) {
      return (
        doctor?.doctorSpecialties
          ?.map((ds) => {
            // Try: specialitiesId, specialities.id, or specialties.id
            return ds?.specialitiesId || null;
          })
          ?.filter((id): id is string => !!id) || []
      );
    }
    return [];
  };

  const [selectedSpecialtyIds, setSelectedSpecialtyIds] = useState<string[]>(getInitialSpecialtyIds);

  const [removedSpecialtyIds, setRemovedSpecialtyIds] = useState<string[]>([]);
  const [currentSpecialtyId, setCurrentSpecialtyId] = useState<string>("");


  
/**
 * Handles adding a specialty to the list of selected specialties.
 * If the current specialty ID is not already in the list of selected specialty IDs, it will be added.
 * If in edit mode and we're re-adding a removed specialty, it will be removed from the list of removed specialty IDs.
 * Finally, it will reset the current specialty ID to an empty string.
 */
  const handleAddSpecialty = () => {
    if (currentSpecialtyId && !selectedSpecialtyIds.includes(currentSpecialtyId)) {
      setSelectedSpecialtyIds([...selectedSpecialtyIds, currentSpecialtyId]);
      // If in edit mode and we're re-adding a removed specialty
      if (removedSpecialtyIds.includes(currentSpecialtyId)) {
        setRemovedSpecialtyIds(removedSpecialtyIds.filter((id) => id !== currentSpecialtyId));
      }
      setCurrentSpecialtyId("");
    }
  };

  

/**
 * Handles removing a specialty from the list of selected specialties.
 * If the current specialty ID is in the list of selected specialty IDs, it will be removed.
 * If in edit mode and we're removing an original specialty, it will be added to the list of removed specialty IDs.
 */
  const handleRemoveSpecialty = (specialtyId: string) => {
    setSelectedSpecialtyIds(selectedSpecialtyIds.filter((id) => id !== specialtyId));

    // In edit mode, track removed specialties
    if (isEdit && doctor?.doctorSpecialties) {
      const wasOriginalSpecialty = doctor?.doctorSpecialties?.some((ds) => {
        const id = ds?.specialitiesId || null;
        return id === specialtyId;
      });
      if (wasOriginalSpecialty && !removedSpecialtyIds.includes(specialtyId)) {
        setRemovedSpecialtyIds([...removedSpecialtyIds, specialtyId]);
      }
    }
  };

/**
 * Returns the list of new specialty IDs that were added in edit mode.
 * If not in edit mode or there are no original specialties, it will return the list of selected specialty IDs.
 * If in edit mode, it will return the list of selected specialty IDs that are not in the list of original specialty IDs.
 * @returns {string[]} The list of new specialty IDs.
 */
  const getNewSpecialties = (): string[] => {
    if (!isEdit || !doctor?.doctorSpecialties) {
      return selectedSpecialtyIds;
    }
    const originalIds = doctor?.doctorSpecialties?.map((ds) => ds?.specialitiesId || null)?.filter((id): id is string => !!id) || [];
    return selectedSpecialtyIds.filter((id) => !originalIds.includes(id));
  };

  const getAvailableSpecialties = (allSpecialties: ISpecialty[]) => {
    return allSpecialties?.filter((s) => !selectedSpecialtyIds?.includes(s?.id)) || [];
  };


   useEffect(() => {
        if (open && doctor) {
            const initialIds = getInitialSpecialtyIds();
            setSelectedSpecialtyIds(initialIds);
            setRemovedSpecialtyIds([]);
            setCurrentSpecialtyId("");
        }
    }, [open, doctor?.id]);


    return {
        selectedSpecialtyIds,
        removedSpecialtyIds,
        currentSpecialtyId,
        setCurrentSpecialtyId,
        handleAddSpecialty,
        handleRemoveSpecialty,
        getNewSpecialties,
        getAvailableSpecialties
    }
};
