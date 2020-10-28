export interface Disclosable {
  isOpen?: boolean;
  transitionSpeed?: number;

  onOpen?(): void;
  onChange?(isOpen: boolean): void;
  onClose?(): void;
}
