<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CoachRentalResource\Pages;
use App\Filament\Resources\CoachRentalResource\RelationManagers;
use App\Models\CoachRental;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Repeater;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;





class CoachRentalResource extends Resource
{
    protected static ?string $model = CoachRental::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('banner_img')->required()->label("Banner Image"),
                TextInput::make('banner_text')->required()->label("Banner Title"),
                TextInput::make('banner_des')->required()->label("Banner Des"),
                FileUpload::make('car_img')->required()->label("Car Image"),
                RichEditor::make('car_des')->required()->label("Car Description"),

                Repeater::make('faq')
                ->schema([
                    TextInput::make('question')->required(),
                    TextInput::make('answer')->required(),

                ])
                ->columns(2)


            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('banner_img')->label("Banner Image"),
                TextColumn::make('banner_text'),
                TextColumn::make(name: 'banner_des'),
                ImageColumn::make('car_img')->label("Car Image"),
                TextColumn::make(name: 'car_des'),
                TextColumn::make(name: 'faq'),
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
            'index' => Pages\ListCoachRentals::route('/'),
            'create' => Pages\CreateCoachRental::route('/create'),
            'edit' => Pages\EditCoachRental::route('/{record}/edit'),
        ];
    }
}
