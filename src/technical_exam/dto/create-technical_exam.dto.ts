export class CreateTechnicalExamDto {
  name: string;
}

export class AnswerTechnicalExamDto {
  user: string;
  alternative: string;
}

export class AnswerAlternativeDto {
  application: string;
  alternative: string;
}
