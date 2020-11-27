export interface EMTTableColumn {
  id: string,
  name: string
}

export interface EMTTableRowCell {
  column: string,
  content: string
}

export interface EMTTableRow {
  id: string,
  entityId: string,
  cells: Map<string, EMTTableRowCell>
}

export interface EMTCheckboxProperties {
  active: boolean,
  selected?: boolean,
  onChange?: (rowId: string) => void
}

export type EMTTableAction = 'delete' | 'download';
