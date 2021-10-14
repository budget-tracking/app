import { findMany, create, deleteOne, findUnique } from './User'

describe('cruds/User.findMany', () => {
  it('should get first five (or less) users', async () => {
    const data = await findMany({
      orderBy: {
        id: "asc"
      },
      take: 5
    })

    expect(data.length).toEqual(expect.any(Number))
  });

  it('findMany should work with no args', async () => {
    const data = await findMany()
    expect(data.length).toEqual(expect.any(Number))
  });

  let uuid: string;

  it('should create a user and return its id', async () => {
    const response = await create({
      data: {
        name: "Test",
        email: "foo@bar.baz"
      }
    })
    uuid = response.id
    console.log({ uuid });
    expect(uuid).toEqual(expect.any(String))
  });

  it('should return info about the created user', async () => {
    const res = await findUnique({
      where: {
        id: uuid
      }
    })

    expect(res?.email).toBe('foo@bar.baz')
  });

  it('should remove the created user and return its name', async () => {
    const response = await deleteOne({
      where: {
        id: uuid
      }
    })
    const name = response.name
    console.log({ name });
    expect(name).toBe("Test")
  });
});