export interface Disclosable {
  isOpen?: boolean;

  onOpen?(): void;
  onChange?(isOpen: boolean): void;
  onClose?(): void;
}
