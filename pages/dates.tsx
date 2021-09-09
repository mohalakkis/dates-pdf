import 'react-dates/initialize'

import { useState } from 'react'
import { Moment } from 'moment'
import { DayPickerSingleDateController } from 'react-dates'

type TypeCalendar = {
  initialDate?: Moment
  callback: (date: string) => void
  isDayBlocked?: (day: Moment) => void
}

const Calendar = ({
  initialDate,
  callback,
  isDayBlocked
}: TypeCalendar): JSX.Element => {
  const [date, setDate] = useState<Moment | null>(initialDate || null)

  const Navigation = () => <img src="/images/icoCalendarNavigation.svg" />

  const handleDate = day => {
    setDate(day)
    callback(day)
  }

  return (
    <DayPickerSingleDateController
      date={date}
      focused
      navPrev={<Navigation />}
      navNext={<Navigation />}
      hideKeyboardShortcutsPanel={true}
      transitionDuration={0}
      onDateChange={day => handleDate(day)}
      isDayBlocked={isDayBlocked}
    />
  )
}

export default Calendar
