<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TourinfoResource\Pages;
use App\Filament\Resources\TourinfoResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;

class TourinfoResource extends Resource
{
    protected static ? string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')->required()->label("Title"),
                FileUpload::make('cover_img')->required()->label("Cover Image"),
                // TextInput::make('tour_type')->required()->label("Title"),
                Select::make('tour_type')->required()
    ->options([
        'Sightseeing tours' => 'Sightseeing tours',
        'Adventure tours' => 'Adventure tours',
        'Cultural or historical tours' => 'Cultural or historical tours',
        "Specialty tours"=>"Specialty tours",
        "Package tours"=>"Package tours",

    ])->label("Tour Type"),
    // ratting
    TextInput::make('groupSize')->required()->label("groupSize"),
    Select::make('ratting')->required()
    ->options([
     "1"=>"1 Star",
     "2"=>"2 Star",
     "3"=>"3 Star",
     "4"=>"4 Star",
     "5"=>"5 Star",

    ])->label("Ratting"),
    
    TextInput::make('country')->required()->label("Country"),
    TextInput::make('city')->required()->label("City"),
    TextInput::make('price')->required()->label("Price"),
    FileUpload::make('img')->required()->label("Images")->multiple(5),

    TextInput::make('days')->required()->label("days"),
    Repeater::make('stay_information')->required()
    ->schema([
        RichEditor::make('des')


    ]),
    
    



            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->label("Title"),
                ImageColumn::make("cover_img")->label("Cover Image"),
                TextColumn::make('tour_type')->label("Tour Type"),

                TextColumn::make('groupSize')->label("groupSize"),
                TextColumn::make('ratting')->label("Ratting"),
                TextColumn::make('country')->label("Country"),
                TextColumn::make('city')->label("City"),
                TextColumn::make('price')->label("Price"),
                ImageColumn::make("img")->label("Image"),

                TextColumn::make('days')->label("Days"),
                TextColumn::make('stay_information')->label("Stay Information"),
               


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
            'index' => Pages\ListTourinfos::route('/'),
            'create' => Pages\CreateTourinfo::route('/create'),
            'edit' => Pages\EditTourinfo::route('/{record}/edit'),
        ];
    }
}
