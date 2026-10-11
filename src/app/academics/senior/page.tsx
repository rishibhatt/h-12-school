import React from 'react';
import { academicStages } from '@/content/academics';
import { AcademicStageView } from '@/components/templates/AcademicStageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Senior Stage (Grades 9 to 12)',
  description:
    'Pre-university scholarship, independent capstone thesis defense, advanced STEM laboratories, and college counseling.',
};

export default function SeniorPage() {
  const stage = academicStages.find((s) => s.id === 'senior')!;
  const prevStage = academicStages.find((s) => s.id === 'middle')!;

  return (
    <AcademicStageView
      stage={stage}
      prevStage={{ id: prevStage.id, name: prevStage.name, nameHi: prevStage.nameHi }}
    />
  );
}
