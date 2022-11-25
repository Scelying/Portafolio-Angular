import { TestBed } from '@angular/core/testing';

import { AuthChatService } from './auth-chat.service';

describe('AuthChatService', () => {
  let service: AuthChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
