import React from 'react';
import { academicStages } from '@/content/academics';
import { AcademicStageView } from '@/components/templates/AcademicStageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Middle Stage (Grades 6 to 8)',
  description:
    'Socratic humanities debate, wet-lab scientific experimentation, and analytical pre-algebra during pivotal adolescent years.',
};

export default function MiddlePage() {
  const stage = academicStages.find((s) => s.id === 'middle')!;
  const prevStage = academicStages.find((s) => s.id === 'primary')!;
  const nextStage = academicStages.find((s) => s.id === 'senior')!;

  return (
    <AcademicStageView
      stage={stage}
      prevStage={{ id: prevStage.id, name: prevStage.name, nameHi: prevStage.nameHi }}
      nextStage={{ id: nextStage.id, name: nextStage.name, nameHi: nextStage.nameHi }}
    />
  );
}
