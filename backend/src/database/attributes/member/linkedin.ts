import { Attribute } from '../attribute'
import { AttributeType } from '../types'
import { MemberAttributes, MemberAttributeName } from './enums'

export const LinkedInMemberAttributes: Attribute[] = [
  {
    name: MemberAttributes[MemberAttributeName.IS_ORGANIZATION].name,
    label: MemberAttributes[MemberAttributeName.IS_ORGANIZATION].label,
    type: AttributeType.BOOLEAN,
    canDelete: false,
    show: false,
  },
  {
    name: MemberAttributes[MemberAttributeName.URL].name,
    label: MemberAttributes[MemberAttributeName.URL].label,
    type: AttributeType.URL,
    canDelete: false,
    show: true,
  },
  {
    name: MemberAttributes[MemberAttributeName.AVATAR_URL].name,
    label: MemberAttributes[MemberAttributeName.AVATAR_URL].label,
    type: AttributeType.URL,
    canDelete: false,
    show: false,
  },
]