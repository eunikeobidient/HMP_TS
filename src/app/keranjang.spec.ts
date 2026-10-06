import { TestBed } from '@angular/core/testing';
import { Keranjang } from './keranjang.service';

describe('Keranjang', () => {
  let service: Keranjang;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Keranjang);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
