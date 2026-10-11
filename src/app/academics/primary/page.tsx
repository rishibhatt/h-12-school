import React from 'react';
import { academicStages } from '@/content/academics';
import { AcademicStageView } from '@/components/templates/AcademicStageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Primary Stage (Kindergarten to Grade 5)',
  description:
    'Foundational literacy, tactile mathematics, nature study, and exploratory discovery in early childhood education.',
};

export default function PrimaryPage() {
  const stage = academicStages.find((s) => s.id === 'primary')!;
  const nextStage = academicStages.find((s) => s.id === 'middle')!;

  return (
    <AcademicStageView
      stage={stage}
      nextStage={{ id: nextStage.id, name: nextStage.name, nameHi: nextStage.nameHi }}
    />
  );
}
