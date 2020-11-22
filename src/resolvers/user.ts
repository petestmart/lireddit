import { MyContext } from "src/types";
import { Query, Resolver, Mutation, Arg, InputType, Field } from "type-graphql";

@InputType()
class UsernamePasswordInput {
    @Field()
    username: string
    @Field()
    password: string
}

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  register(
      @Arg('options') options: UsernamePasswordInput,
      @Ctx() {em}: MyContext
  ) {
    const user = em.create(User, {username: options.username})  
    await em.persistAndFlush(user);
    return "Hello World";
  }
}
