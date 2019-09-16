import React, { Component } from 'react'
import {
  Table,
  CardBody,
  CardHeader,
  Card,
} from 'reactstrap';

/**
 * This component displays a list of prepositions and their associated case, meant to be displayed within a GrammarTip component
 */
class PrepositionsTip extends Component {
    render() {
        const prepositions = {
            "accusative": [
                "bis",
                "durch",
                "entlang",
                "für",
                "gegen",
                "ohne",
                "um",
                "wider",
            ], 
            "dative": [
                "aus",
                "außer",
                "bei",
                "gegenüber",
                "mit",
                "nach",
                "seit",
                "von",
                "zu",
            ], 
            "accusative_dative": [
                "an",
                "auf",
                "hinter",
                "in",
                "neben",
                "über",
                "unter",
                "vor",
                "zwischen",
            ], 
            "genitive": [
                "statt",
                "außerhalb",
                "innerhalb",
                "trotz",
                "während",
                "wegen",
            ]
        }

        // Combine the prepositions into a multidimensional array ready to be printed as a table
        const combined = [];
        let acc, dat, acc_dat, gen;
        do {
            acc = prepositions.accusative.shift();
            dat = prepositions.dative.shift();
            acc_dat = prepositions.accusative_dative.shift();
            gen = prepositions.genitive.shift();
            combined.push([acc, dat, acc_dat, gen]);
        } while (acc || dat || acc_dat || gen)

        return (
            <Card className="border-primary">
            <CardHeader>
                List of prepositions and the case that follows.
            </CardHeader>
            <CardBody>
                <Table>
                    <thead className="thead-light">
                    <tr>
                        <th>Accusative</th>
                        <th>Dative</th>
                        <th>Accusative or dative</th>
                        <th>Genitive</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        combined.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td>{row[0]}</td>
                                    <td>{row[1]}</td>
                                    <td>{row[2]}</td>
                                    <td>{row[3]}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </Table>
            </CardBody>
            </Card>
      )
    }
}

export default PrepositionsTip
