import { QuizList } from '@/components/quiz/QuizList';
import { Container } from '@/components/ui/container';

const QuizClientPage = () => {
  return (
    <section>
      <Container className=" w-full flex justify-center items-start">
        <QuizList />
      </Container>
    </section>
  );
};

export default QuizClientPage;
