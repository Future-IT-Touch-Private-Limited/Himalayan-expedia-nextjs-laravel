<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PopularCityResource\Pages;
use App\Filament\Resources\PopularCityResource\RelationManagers;
use App\Models\PopularCity;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PopularCityResource extends Resource
{
    protected static ?string $model = PopularCity::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('cityname')->required()->label('City Name'),
                Forms\Components\FileUpload::make('img')->image()->required()->label('Image'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('img')->label('Image'),
                Tables\Columns\TextColumn::make('cityname')->sortable()->searchable()->label('City Name'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPopularCities::route('/'),
            'create' => Pages\CreatePopularCity::route('/create'),
            'edit' => Pages\EditPopularCity::route('/{record}/edit'),
        ];
    }
}
