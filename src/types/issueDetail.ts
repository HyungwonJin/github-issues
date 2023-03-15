import {LabelType, UserType} from "./issueList";

export type IssueDetailType = {
  html_url: string
  id: number
  number: number
  title: string
  user: UserType
  labels: LabelType[]
  state: string
  comments: number
  body: string
}

