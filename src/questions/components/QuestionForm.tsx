import { Form, FormProps } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import { z } from "zod"
export { FORM_ERROR } from "src/core/components/Form"
import styles from "./QuestionForm.module.css"

export function QuestionForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  const handleAddChoice = () => {}

  const handleRemoveChoice = () => {}

  return (
    <Form<S> {...props}>
      <LabeledTextField id="question" name="text" label="Question Text" placeholder="Text" />
      {/* TODO: change the choices to dynamic */}
      <LabeledTextField id="choice0" name="choices.0.text" label="Choice 1" />
      <div className={styles.newChoiceRow}>
        <button onClick={() => handleAddChoice()} className={styles.choiceBtn}>
          Add new choice
        </button>
        <button onClick={() => handleRemoveChoice()} className={styles.choiceBtn}>
          Remove choice
        </button>
      </div>
    </Form>
  )
}
