from hashlib import sha512

def hash_password(password, salt="salt"):
  hasher = sha512()
  hasher.update(password.encode() + salt.encode())
  return hasher.hexdigest()