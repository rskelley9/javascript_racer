get '/' do



  erb :index
end


post '/game' do
  @player1 = Player.find_or_create_by_name(name: params[:player1])
  @player2 = Player.find_or_create_by_name(name: params[:player2])
  @game = Game.create()
  @game.players << [@player1, @player2]

  @round_player1 = Round.create(player_id: @player1.id, game_id: @game.id)
  @round_player2 = Round.create(player_id: @player2.id, game_id: @game.id)
  redirect to "/game/#{@game.id}/"
end

get '/game/:game_id/' do

  @game = Game.find(params[:game_id])
  @player1 = @game.players.first
  @player2 = @game.players.last


  erb :game
end


# post '/winner' do

#   if request.xhr?
#     p params

#   end

# end
